import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../utils/catchAsyncErrors";
import ErrorHandler from "../utils/errorHandler";
import { IMail } from "./interface.controller";
import mailContentCreationModel from "../models/mailContentCreation.model";
import mailModel from "../models/mail.model";
import mailActionCTAModel from "../models/mailActionCTA.model";
import sendMail from "../utils/sendMail";
import mailZeroToHeroModel from "../models/mailZeroToHero.model";

export const collectionMailZeroToHero = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, email} = req.body;
            const isEmailExist = await mailZeroToHeroModel.findOne({ email });
            if (isEmailExist) {
                return next(new ErrorHandler("Email đã được đăng kí!", 400));
            }
            const user: IMail = { name, email};
            const data  = await mailZeroToHeroModel.create(user);
            await sendMail({
                email:email,
                subject: "[TÀI LIỆU LỘ TRÌNH SOCIAL MEDIA MANAGER TỪ CON SỐ 0] từ Quizzy Học Marketing",
                template: "activation-collection-mail-zero-to-hero.ejs",
                data:user,
            });
            res.status(200).json({
                success: true,
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

export const collectionMailContentCreation = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, email} = req.body;
            const isEmailExist = await mailContentCreationModel.findOne({ email });
            if (isEmailExist) {
                return next(new ErrorHandler("Email đã được đăng kí!", 400));
            }
            const user: IMail = { name, email};
            const data  = await mailContentCreationModel.create(user);
            await sendMail({
                email:email,
                subject: "[TÀI LIỆU CONTENT CREATION] từ Quizzy Học Marketing",
                template: "activation-collection-mail-content-creation.ejs",
                data:user,
            });
            res.status(200).json({
                success: true,
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

export const collectionMailCTA = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, email} = req.body;
            const isEmailExist = await mailActionCTAModel.findOne({ email });
            if (isEmailExist) {
                return next(new ErrorHandler("Email đã được đăng kí!", 400));
            }
            const user: IMail = { name, email};
            const data  = await mailActionCTAModel.create(user);
            await sendMail({
                email:email,
                subject: "[TÀI LIỆU CTA TEMPLATE] từ Quizzy Học Marketing",
                template: "activation-collection-mail-action-cta.ejs",
                data:user,
            });
            res.status(200).json({
                success: true,
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

export const collectionMail = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, email} = req.body;
            const isEmailExist = await mailModel.findOne({ email });
            if (isEmailExist) {
                return next(new ErrorHandler("Email đã được đăng kí!", 400));
            }
            const user: IMail = { name, email};
            const data  = await mailModel.create(user);
            await sendMail({
                email:email,
                subject: "Quà tặng Template Content Calendar của bạn đây!!!",
                template: "activation-collection-mai.ejs",
                data:user,
            });
            res.status(200).json({
                success: true,
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

export const getCollectionMail = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const page = 1, limit = 100;
            const emails = await mailActionCTAModel.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();;
            const count = await mailActionCTAModel.count();
            res.status(200).json({
                success: true,
                totalMails:count,
                totalPages: Math.ceil(count / limit),
                currentPage: page,
                data:emails
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
);