export type GetKeysResponse = KeysType[];
export interface PostKeyRequest extends Omit<KeysType, ''> {}

export type KeysType = {
  number: number;
  name: string;
};
