import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const useCounterContext = () => useContext(CounterContext)

export default useCounterContext