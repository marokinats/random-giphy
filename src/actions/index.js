// Action types
export const REQUEST_IMAGE = 'REQUEST_IMAGE';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const PUSH_IMAGE = 'PUSH_IMAGE';
export const DELETE_IMAGE = 'DELETE_IMAGE';
export const REQUEST_IMAGE_FAILED = 'REQUEST_IMAGE_FAILED';

export function requestImage() {
  return {
    type: REQUEST_IMAGE
  }
}

export function deleteImage(images) {
  return {
    type: DELETE_IMAGE,
    payload: images
  }
}