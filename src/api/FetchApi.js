import axios from "axios";
import { useState, useEffect } from "react";

function FetchApi(url) {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const callUrl = async () => {
    try {
      const { data } = await axios.get(process.env.REACT_APP_BASEURL + url);
      setPayload(data);
    } catch {
      setError("실패");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callUrl();
  });

  return { payload, loading, error };
}

export default FetchApi;
