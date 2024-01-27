import React from "react";
import { useEffect, useState } from "react";

function OfflineOnlineListMaker() {
    const useIsOnline = () => {
        const [online, setOnline] = useState([window.navigator.onLine])

        useEffect(() => {
            window.addEventListener('online', () => {
                console.log('came online')
                setOnline([...online, true]);
            });
            window.addEventListener('offline', () => {
                console.log('came offline')
                setOnline([...online, false]);
            });
        }, [online])

        return online
    }

    const online = useIsOnline()
    return (
        <>
            {
                online.map((status, i) =>
                    <div key={i}>
                        {status ? "Online" : "Offline"}
                    </div>
                )
            }
        </>
    )
}

export default OfflineOnlineListMaker
