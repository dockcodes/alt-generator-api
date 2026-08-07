import type { ApiClient, RequestOptions } from '@dockcodes/fetcher';
import type {
    GenerateBody,
    GenerateParams,
    GenerateResponse,
    GetImageParams,
    GetImageSetImagesParams,
    GetImageSetImagesResponse,
    GetImageSetParams,
    GetImageSetResponse,
    GetUserResponse,
    LoginBody,
    LoginResponse,
    UpdateImageSetVisbilityParams,
    UpdateImageSetVisbilityResponse,
} from './types';

function altGeneratorApi(client: ApiClient) {
    return {
        login(body: FormData | LoginBody, options?: RequestOptions) {
            return client.POST<LoginResponse>('/token', body, undefined, options);
        },
        generate(body: FormData | GenerateBody, params: GenerateParams, options?: RequestOptions) {
            return client.POST<GenerateResponse>('/generate', body, params, options);
        },
        getImagePath(params: GetImageParams) {
            return client.url('/image/:image_uuid', params);
        },
        getImageSet(params: GetImageSetParams, options?: RequestOptions) {
            return client.GET<GetImageSetResponse>('/image-set/:image_set_uuid', params, options);
        },
        getImageSetImages(params: GetImageSetImagesParams, options?: RequestOptions) {
            return client.GET<GetImageSetImagesResponse>('/image-set/:image_set_uuid/images', params, options);
        },
        updateImageSetVisiblity(params: UpdateImageSetVisbilityParams, options?: RequestOptions) {
            return client.PATCH<UpdateImageSetVisbilityResponse>('/image-set/:image_set_uuid/visibility', undefined, params, options);
        },
        getUser(options?: RequestOptions) {
            return client.GET<GetUserResponse>('/user', undefined, options);
        },
    };
}

export default altGeneratorApi;
