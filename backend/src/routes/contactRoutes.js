import express from 'express';
import { body } from 'express-validator';
import { createContact, getAllContacts, updateContactStatus } from '../controllers/contactController.js';
import { isAuthenticated, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Validation middleware
const contactValidation = [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('subject').notEmpty().withMessage('Subject is required'),
    body('message').notEmpty().withMessage('Message is required')
];

// Public routes
router.post('/', contactValidation, createContact);

// Admin routes
router.get('/admin', isAuthenticated, isAdmin, getAllContacts);
router.put('/admin/:id', isAuthenticated, isAdmin, updateContactStatus);

export default router; 