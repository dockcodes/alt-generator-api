import type { languages, tones, variants } from "./consts";

type GeneratorTone = (typeof tones)[number];
type GeneratorLanguage = (typeof languages)[number];
type GeneratorVariants = (typeof variants)[number];

type LoginBody = {
  username: string;
  password: string;
};
type LoginResponse = string;

type GenerateBody = {
  file: string;
};
type GenerateParams = {
  context: string;
  lang: GeneratorLanguage;
  recaptcha_token?: string;
  set_uuid?: string;
  tone: GeneratorTone;
  variants: GeneratorVariants;
};
type GenerateResponse = string;

type GetImageParams = { image_uuid: string };
type GetImageResponse = string;

type GetImageSetParams = { image_set_uuid: string };
type GetImageSetResponse = string;

type GetImageSetImagesParams = {
  image_set_uuid: string;
  page: number;
  per_page: number;
};
type GetImageSetImagesResponse = string;

type UpdateImageSetVisbilityBody = { image_set_uuid: string; private: boolean };
type UpdateImageSetVisbilityResponse = string;

type GetUserResponse = { requests: { limit: number; used: number } };

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
  UpdateImageSetVisbilityBody,
  UpdateImageSetVisbilityResponse,
  GetUserResponse,
};
