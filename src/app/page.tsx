"use client";

import Sidebar from "@/ui/Layout/Sidebar";
import MainView from "@/ui/Layout/MainView";
import LocalVideo from "@/ui/Video/LocalVideo";
import { useStore } from "@/store/useStore";
import UserAgentHandler from "@/hook/userAgentHandler";
import { useEffect, useState } from "react";
import { getExtension } from "@/request/request";
import CallOut from "@/ui/LeftBar/CallOut";
import StatusConnection from "@/ui/LeftBar/StatusConnection";
import ConnectSip from "@/ui/LeftBar/ConnectSip";

export default function Home() {
  const { setProfile } = useStore((state) => state);
  const [status, handleRegister, handleUnRegister] = UserAgentHandler();
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  useEffect(() => {
    (async () => {
      setProfile(await getExtension());
    })();
  }, [setProfile]);

  useEffect(() => {
    function handleEscapeKey(event: any) {
      if (event.key === "Escape") setIsSettingOpen(false);
    }
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);
  return (
    <main className="flex flex-row h-screen bg-gray-100">
      <Sidebar>
        <div className="flex flex-col gap-2 w-full">
          <LocalVideo />
          {/*<ProfileList />*/}
          <ConnectSip
            status={status}
            handleRegister={handleRegister}
            handleUnRegister={handleUnRegister}
          />
          <StatusConnection />
          <CallOut />
          {/*<Box />*/}
        </div>
      </Sidebar>
      <MainView>Hello</MainView>
    </main>
  );
}
