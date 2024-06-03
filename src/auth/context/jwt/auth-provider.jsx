import PropTypes from 'prop-types';
import { useMemo, useEffect, useReducer, useCallback } from 'react';

import axios, { endpoints } from 'src/utils/axios';

import { setSession } from './utils';
import { AuthContext } from './auth-context';
import { AUTH_API } from '../../../config-global';

// ----------------------------------------------------------------------
/**
 * NOTE:
 * We only build demo at basic level.
 * Customer will need to do some extra handling yourself if you want to extend the logic and other features...
 */
// ----------------------------------------------------------------------

const initialState = {
  vendor: null,
  loading: true,
};

const reducer = (state, action) => {
  if (action.type === 'INITIAL') {
    return {
      loading: false,
      vendor: action.payload.vendor,
    };
  }
  if (action.type === 'LOGIN') {
    return {
      ...state,
      vendor: action.payload.vendor,
    };
  }
  if (action.type === 'REGISTER') {
    return {
      ...state,
      vendor: action.payload.vendor,
    };
  }
  if (action.type === 'LOGOUT') {
    return {
      ...state,
      vendor: null,
    };
  }
  return state;
};

// ----------------------------------------------------------------------

// const VENDOR = 'vendor';

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const initialize = useCallback(async () => {
  //   try {
  //     const vendor_code = sessionStorage.getItem(VENDOR);
  //
  //     if (vendor_code) {
  //       setSession(vendor_code);
  //       const url = `${AUTH_API}/api/users/me`;
  //       const response = await axios.get(url);
  //
  //       const user  = response.data;
  //
  //       dispatch({
  //         type: 'INITIAL',
  //         payload: {
  //           user: {
  //             ...user,
  //             jwt,
  //             jwtRefresh,
  //           },
  //         },
  //       });
  //     } else {
  //       dispatch({
  //         type: 'INITIAL',
  //         payload: {
  //           user: null,
  //         },
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     dispatch({
  //       type: 'INITIAL',
  //       payload: {
  //         user: null,
  //       },
  //     });
  //   }
  // }, []);
  //
  // useEffect(() => {
  //   initialize();
  // }, [initialize]);

  // LOGIN
  const login = useCallback(async (phone_number, password, vendor_category) => {
    const data = {
      phone_number,
      password,
      vendor_category,
    };

    const URL = `${AUTH_API}/nccf/csp_login`;
    const response = await axios.post(URL, data);

    const vendor = response.data.data[0];
    const { vendor_code } = vendor;

    setSession(vendor_code);

    dispatch({
      type: 'LOGIN',
      payload: {
        vendor: {
          ...vendor,
          vendor_code
        },
      },
    });
  }, []);

  // REGISTER
  // const register = useCallback(async (email, password, firstName, lastName) => {
  //   const data = {
  //     email,
  //     password,
  //     firstName,
  //     lastName,
  //   };
  //
  //   const response = await axios.post(endpoints.auth.register, data);
  //
  //   const { accessToken, user } = response.data;
  //
  //   sessionStorage.setItem(STORAGE_KEY, accessToken);
  //
  //   dispatch({
  //     type: 'REGISTER',
  //     payload: {
  //       user: {
  //         ...user,
  //         accessToken,
  //       },
  //     },
  //   });
  // }, []);

  // LOGOUT
  const logout = useCallback(async () => {
    setSession(null);
    dispatch({
      type: 'LOGOUT',
    });
  }, []);

  // ----------------------------------------------------------------------

  const checkAuthenticated = state.vendor ? 'authenticated' : 'unauthenticated';

  const status = state.loading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      vendor: state.vendor,
      method: 'jwt',
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      //
      login,
      logout,
    }),
    [login, logout, state.vendor, status],
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
