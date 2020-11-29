import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersController from '../controllers/UsersControllers';
import UserAvatarController from '../controllers/UserAvatarController';

import ensureAutchenticated from '../middlewares/ensureAuthenticated';

const UsersRouter = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
const upload = multer(uploadConfig);

UsersRouter.post('/', usersController.create);

UsersRouter.patch(
  '/avatar',
  ensureAutchenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default UsersRouter;
