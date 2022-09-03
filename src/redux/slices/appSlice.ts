/*
 * File: appSlice.ts
 * Project: beaker
 * -----
 * Last Modified: 15 Mar 2022 10:34:41 pm
 * -----
 * Copyright (c) 2022 Elegant Software Solutions All rights reserved.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../../models/Application';

const initialState: AppState = {
  showLoader: false,
  application: null,
  user: null,
  acuityContext: null,
  accessToken: null,
  company: null
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showLoader(state, action: PayloadAction<AppState['showLoader']>): void {
      state.showLoader = action.payload;
    },
    setUser(state, action: PayloadAction<AppState['user']>): void {
      state.user = action.payload;
    },
    setAcuityContext(state, action: PayloadAction<AppState['acuityContext']>): void {
      state.acuityContext = action.payload;
    },
    setAccessToken(state, action: PayloadAction<AppState['accessToken']>) {
      state.accessToken = action.payload;
    },
    setCompany(state, { payload }: PayloadAction<AppState['company']>) {
      state.company = payload;
    }
  }
});

export const { showLoader: setLoader, setUser, setAcuityContext, setAccessToken, setCompany } = appSlice.actions;
