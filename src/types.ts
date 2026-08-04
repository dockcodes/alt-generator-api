import type { languages, tones, variants } from './consts';

type GeneratorTone = (typeof tones)[number];
type GeneratorLanguage = (typeof languages)[number];
type GeneratorVariants = (typeof variants)[number];

type LoginBody = {
    username: string;
    password: string;
};
type LoginResponse = {
    access_token: string;
    token_type: 'bearer';
};

type GenerateBody = {
    file: string;
};
type GenerateParams = {
    context?: string;
    lang?: GeneratorLanguage;
    recaptcha_token?: string;
    set_uuid?: string;
    tone?: GeneratorTone;
    variants?: GeneratorVariants;
};
type GenerateResponse = {
    data: {
        set_uuid: string;
        image: {
            uuid: string;
            filename: string;
            alts: string[];
        };
    };
};

type GetImageParams = {
    image_uuid: string;
};
type GetImageResponse = File;

type GetImageSetParams = {
    image_set_uuid: string;
};
type GetImageSetResponse = {
    context: string;
    created_at: string;
    images_count: number;
    is_owner: boolean;
    language: 'en';
    private: boolean;
    tone: 'neutral';
    uuid: string;
    variants: number;
};

type GetImageSetImagesParams = {
    image_set_uuid: string;
    page: number;
    per_page: number;
};
type GetImageSetImagesResponse = {
    data: {
        uuid: string;
        alts: { id: number; alt: string; locale: 'en'; created_at: string }[];
        created_at: string;
    }[];
    pagination: {
        page: number;
        per_page: number;
        total_items: number;
    };
};

type UpdateImageSetVisbilityBody = {
    image_set_uuid: string;
    private: boolean;
};
type UpdateImageSetVisbilityResponse = {
    success: boolean;
    message: string;
    data: {
        uuid: string;
        private: boolean;
    };
};

type GetUserResponse = {
    requests: { limit: number; used: number };
};

export type {
    LoginBody,
    LoginResponse,
    GenerateBody,
    GenerateResponse,
    GenerateParams,
    GetImageParams,
    GetImageResponse,
    GetImageSetImagesParams,
    GetImageSetImagesResponse,
    GetImageSetParams,
    GetImageSetResponse,
    UpdateImageSetVisbilityBody as UpdateImageSetVisbilityParams,
    UpdateImageSetVisbilityResponse,
    GetUserResponse,
};
