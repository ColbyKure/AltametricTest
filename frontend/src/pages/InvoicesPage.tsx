import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInvoices } from '../redux/slices/invoiceSlice';
import { RootState } from '../redux/store';
import axios from 'axios';
import './Table.css';
import './Modal.css';

const InvoicesPage: React.FC = () => {
  const dispatch = useDispatch();
  const invoices = useSelector((state: RootState) => state.invoices.invoices);
  
  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;  // Page Size for Invoice Table
  
  // Accessing the authentication state from Redux
  const token = useSelector((state: RootState) => state.auth.token);
  
  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        console.log('Getting invoices...');
        const response = await axios.get('http://localhost:5000/invoices');
        dispatch(setInvoices(response.data)); //save data for later
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };

    if (token) {
      fetchInvoices();  // Fetch invoices only if the user is logged in
    }
  }, [dispatch, token]);

  const handleInvoiceClick = async (invoiceId: number) => {
    setLoading(true);
    setError('');
    try {
      console.log('getting: ', invoiceId);
      const response = await axios.get(`http://localhost:5000/invoices/${invoiceId}`);
      setSelectedInvoice(response.data); // Set data to show
      console.log(response.data);
      setShowModal(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('Failed to load invoice details.');
    }
  };

  // Pagination logic
  const indexOfLastInvoice = currentPage * rowsPerPage;
  const indexOfFirstInvoice = indexOfLastInvoice - rowsPerPage;
  const currentInvoices = invoices.slice(indexOfFirstInvoice, indexOfLastInvoice);

  const totalPages = Math.ceil(invoices.length / rowsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const closeModal = () => {
    setShowModal(false);
    setSelectedInvoice(null);
  };

  const deleteInvoice = async () => {
    if (selectedInvoice) {
      // Show confirmation dialog
      const isConfirmed = window.confirm(
        `Delete invoice with id ${selectedInvoice.id}?`
      );
  
      if (isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/invoices/${selectedInvoice.id}`);
          
          // Dispatch an action to remove the invoice from the Redux state
          dispatch(setInvoices(invoices.filter((invoice) => invoice.id !== selectedInvoice.id)));
          
          setShowModal(false);
          setSelectedInvoice(null);
        } catch (error) {
          console.error('Error deleting invoice:', error);
          setError('Failed to delete the invoice.');
        }
      } else {
        console.log('Delete action cancelled.');
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      {token ? (
        <div className="table-container">
          <h2 style={{ textAlign: 'center' }}>Invoices</h2>
          
          {/* Pagination Controls */}
          <div className="pagination">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
          
          {/* Table */}
          <table>
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Vendor Name</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentInvoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td>{invoice.id}</td>
                  <td>{invoice.vendor_name}</td>
                  <td>${invoice.amount.toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleInvoiceClick(invoice.id)}>View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h2>You are not logged in to this page.</h2>
          <p>Please log in to view invoices.</p>
        </div>
      )}
      
      {/* Modal for displaying invoice details */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {selectedInvoice && !loading && (
              <div className="modal-content">
                <button style={{ float: 'right' }} onClick={closeModal}>Close</button>
                <h2>Invoice Details</h2>
                <p><strong>Invoice ID:</strong> {selectedInvoice.id}</p>
                <p><strong>Vendor Name:</strong> {selectedInvoice.vendor_name}</p>
                <p><strong>Amount:</strong> ${selectedInvoice.amount.toFixed(2)}</p>
                <p><strong>Due Date:</strong> {new Date(selectedInvoice.due_date).toLocaleDateString()}</p>
                <button style={{ float: 'right', backgroundColor: 'orange' }} onClick={deleteInvoice}>Delete</button>
                <p><strong>Description:</strong> {selectedInvoice.description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoicesPage;
