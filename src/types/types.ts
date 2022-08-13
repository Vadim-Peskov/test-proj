export type dataItem = {
  username: string;
  action: string;
  action_createad_at: string;
  key?: number;
};

export type TInitialState = {
  users: dataItem[];
}