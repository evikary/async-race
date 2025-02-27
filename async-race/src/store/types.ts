import {
  CHANGE_PAGE,
  START_GAME,
  GET_CARS_SUCCESS,
  GET_CARS_FAILED,
  CREATE_CAR_SUCCESS,
  CREATE_CAR_FAILED,
  DELETE_CAR,
  UPDATE_CAR,
  NEXT_PAGE,
  PREV_PAGE,
} from './constants';

export interface StateData {
  viewPage: 'garage' | 'winners';
  totalCars: number;
  cars: Car[];
  carsFailed: boolean;
  currentPage: number;
}

export interface StartGameActionType {
  readonly type: typeof START_GAME;
}

export interface ChangePageActionType {
  readonly type: typeof CHANGE_PAGE;
  payload: 'garage' | 'winners';
}

export interface GetCarsFailedActionType {
  readonly type: typeof GET_CARS_FAILED;
}

export interface GetCarsSuccessActionType {
  readonly type: typeof GET_CARS_SUCCESS;
  payload: {
    totalCount: number;
    cars: Car[];
  };
}

export interface CreateCarSuccessActionType {
  readonly type: typeof CREATE_CAR_SUCCESS;
  payload: Car;
}

export interface CreateCarFailedActionType {
  readonly type: typeof CREATE_CAR_FAILED;
}

export interface DeleteCarActionType {
  readonly type: typeof DELETE_CAR;
  payload: number;
}

export interface UpdateCarActionType {
  readonly type: typeof UPDATE_CAR;
  payload: Car;
}

export interface NextPageActionType {
  readonly type: typeof NEXT_PAGE;
}

export interface PrevPageActionType {
  readonly type: typeof PREV_PAGE;
}

export type SubcribersType = () => void;

export interface Car {
  name: string;
  color: string;
  id: number;
}

export interface CreatedCar {
  name: string;
  color: string;
}
