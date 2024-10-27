export interface User {
  UserId?: string;
  email?: string;
  full_name?: string;
  msg?: string;
  status?: string;
  token?: string;
  username?: string;
}

export interface AuthContextType {
  user?: User;
  setUser?: any;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error?: any;
  logout: () => void;
  token: string;
  profileDetails?: UserProfile | undefined;
  UserId?: string | number;
}
export interface UserProfile {
  avtar_key?: string | undefined;
  earning?: number;
  email?: string;
  full_name?: string;
  main_bal?: number;
  Profile?: string;
  ref_code?: string;
  status?: string;
  statuswinning: string;
  deposit?: string;
  username?: string;
  winning?: string | any;
  kyc_status: string;
  cash_won?: number;
  battle_played?: number;
  referral_earning?: number;
  profileDetails?: any;
}
export interface ReferalDetail {
  referal_count: string;
  ref_code: string;
  referral: any;
  commission: any;
  referal_earning: number | any;
}

export interface GameList {
  id: string;
  game_name: string;
  game_type: string;
  game_price: string;
  game_img: string;
  event_name: string;
}
