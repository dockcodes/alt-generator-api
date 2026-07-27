import type { ApiClient, RequestOptions } from "@dockcodes/fetcher";
import type {
  GenerateBody,
  GenerateParams,
  GenerateResponse,
  GetImageParams,
  GetImageResponse,
  GetImageSetImagesParams,
  GetImageSetImagesResponse,
  GetImageSetParams,
  GetImageSetResponse,
  GetUserResponse,
  LoginBody,
  LoginResponse,
  UpdateImageSetVisbilityBody,
  UpdateImageSetVisbilityResponse
} from "./types";

function altGeneratorApi(client: ApiClient) {
  return {
    login(body: LoginBody, options?: RequestOptions) {
      return client.POST<LoginResponse>("/token", body, options);
    },
    generate(body: GenerateBody & GenerateParams, options?: RequestOptions) {
      return client.POST<GenerateResponse>("/generate", body, options);
    },
    getImage(params: GetImageParams, options?: RequestOptions) {
      return client.GET<GetImageResponse>(
        "/image/:image_uuid'",
        params,
        options,
      );
    },
    getImageSet(params: GetImageSetParams, options?: RequestOptions) {
      return client.GET<GetImageSetResponse>(
        "/image-set/:image_set_uuid",
        params,
        options,
      );
    },
    getImageSetImages(
      params: GetImageSetImagesParams,
      options?: RequestOptions,
    ) {
      return client.GET<GetImageSetImagesResponse>(
        "/image-set/:id/images",
        params,
        options,
      );
    },
    updateImageSetVisiblity(
      body: UpdateImageSetVisbilityBody,
      options?: RequestOptions,
    ) {
      return client.PATCH<UpdateImageSetVisbilityResponse>(
        "/image-set/{id}/visibility",
        body,
        options,
      );
    },
    getUser(options?: RequestOptions) {
      return client.GET<GetUserResponse>("/users", undefined, options);
    },
  };
}

export default altGeneratorApi;
