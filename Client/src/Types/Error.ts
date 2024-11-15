export type RouteError = {
  status?: number;
  message?: string;
};

export type ErrorMsg = { msg: string };
export type ErrorResponse = {
  response: {
    data: {
      msg: string;
    };
  };
};
// export type CustomLoginError ={
//   error:{
//     response:{
//     data:{
//       msg:string;
//     }
//     }
//   }
// }
