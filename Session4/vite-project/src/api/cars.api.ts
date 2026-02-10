// get Cars

import type { Car } from "../types/car.types";
import axiosClient from "./axiosClient";

export async function getCars(): Promise<Car[]> {
  const response = await axiosClient.get('/cars');

  return response.data;
}


// create Car


// update Car



// delete Car