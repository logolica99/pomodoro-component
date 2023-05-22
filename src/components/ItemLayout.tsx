import React from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
interface IpropType {
  title: String;
  children: React.ReactNode;
}

const mdTheme = createTheme({
  palette: {
    primary: {
      main: "#F7A928",
    },
  },
});

export default function ItemLayout({ title, children }: IpropType) {
  return (
    <ThemeProvider theme={mdTheme}>
      <div className="rounded-md border border-zinc-700 bg-zinc-800 shadow">
        <div className="flex items-center justify-between border-b border-zinc-700 p-3 md:p-5">
          <p className="text:lg md:text-xl  text-primary">{title}</p>
          <div className="cursor-pointer p-2 duration-150 ease-in hover:rounded-full hover:bg-zinc-700 ">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.6138 0.386593C13.4356 0.208375 13.1188 0.208375 12.9406 0.386593L6.99997 6.32719L1.05937 0.386593C0.881154 0.208375 0.564323 0.208375 0.386105 0.386593C0.207887 0.564811 0.207887 0.881643 0.386105 1.05986L6.3267 7.00045L0.386105 12.941C0.207887 13.1193 0.207887 13.4361 0.386105 13.6143C0.485115 13.7133 0.603926 13.7529 0.722738 13.7529C0.84155 13.7529 0.960362 13.7133 1.05937 13.6143L6.99997 7.67372L12.9406 13.6143C13.0396 13.7133 13.1584 13.7529 13.2772 13.7529C13.396 13.7529 13.5148 13.7133 13.6138 13.6143C13.792 13.4361 13.792 13.1193 13.6138 12.941L7.67323 7.00045L13.6138 1.05986C13.792 0.881643 13.792 0.584613 13.6138 0.386593Z"
                fill="#F7A928"
              />
            </svg>{" "}
          </div>
        </div>
        <div className="px-4 md:px-5">{children}</div>
      </div>
    </ThemeProvider>
  );
}
