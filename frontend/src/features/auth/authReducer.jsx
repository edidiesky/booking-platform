"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const RegisterUser = createAsyncThunk(
  "RegisterUser",
  async (userdata, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_BASE_URLS}/auth/register`,
        userdata
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const LoginUser = createAsyncThunk(
  "LoginUser",
  async (userdata, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_BASE_URLS}/auth/login`,
        userdata
      );
      localStorage.setItem("customer", JSON.stringify(data.user));
      localStorage.setItem("customertoken", data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const GetAllUsers = createAsyncThunk(
  "GetAllUsers",
  async (userId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const config = {
        headers: {
          authorization: `Bearer ${state.auth.token}`,
        },
      };
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/user`,
        config
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const DeleteSingleUser = createAsyncThunk(
  "DeleteSingleUser",
  async (userId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const config = {
        headers: {
          authorization: `Bearer ${state.auth.token}`,
        },
      };
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_BASE_URLS}/user/${userId}`,
        config
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const UpdateSingleUser = createAsyncThunk(
  "UpdateSingleUser",
  async (user, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const config = {
        headers: {
          authorization: `Bearer ${state.auth.token}`,
        },
      };
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_BASE_URLS}/user/${user?.id}`,
        user,
        config
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);
