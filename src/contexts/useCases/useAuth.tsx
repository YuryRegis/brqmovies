import React, {useContext} from 'react';
import {IAuthContextData, AuthContext} from '../Authentication';


export function useAuth(): IAuthContextData {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
  
    return context;
}
