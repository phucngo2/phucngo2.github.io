import { Center, Loader } from "@mantine/core";
import { Suspense as ReactSuspense } from "react";

interface SuspenseProps {
  children: React.ReactNode;
}

export const Suspense: React.FC<SuspenseProps> = ({ children }) => {
  return (
    <ReactSuspense
      fallback={
        <Center className="flex-1">
          <Loader type="dots" />
        </Center>
      }
    >
      {children}
    </ReactSuspense>
  );
};
