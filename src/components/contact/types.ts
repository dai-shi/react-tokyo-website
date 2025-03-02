/**
 * Contactフォームの入力値
 */
export type ContactFormData = {
  name: string;
  email: string;
  contents: string;
};

/**
 * GASからのレスポンス
 */
export type GASResponse = {
  success: boolean;
};

/**
 * useActionsStateの戻り値
 */
export type ActionResponse = {
  success: boolean;
  message: string[];
  inputs?: ContactFormData;
  errors?: {
    [K in keyof ContactFormData]?: string[];
  };
};
