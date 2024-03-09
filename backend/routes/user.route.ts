import express from 'express';
import { collectionMail, collectionMailContentCreation, getCollectionMail,collectionMailCTA, collectionMailZeroToHero } from '../controllers/mail.controller';
const router = express.Router();

router.post('/collection-mail', collectionMail)
router.post('/collection-mail-content-creation', collectionMailContentCreation)
router.post('/collection-mail-action-cta', collectionMailCTA)
router.post('/collection-mail-zero-to-hero', collectionMailZeroToHero)

router.get('/get-collection-mail', getCollectionMail)

export default router