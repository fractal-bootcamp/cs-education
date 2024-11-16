import { TerminalOutput } from "@/types/types";
import { create } from "zustand";

interface StoreTerminalOutputState {
  terminalOutputs: TerminalOutput[];
  createTerminalOutput: (output: TerminalOutput) => void;
}

export const storeTerminalOutput = create<StoreTerminalOutputState>((set) => ({
  terminalOutputs: [],
  createTerminalOutput: (output: TerminalOutput) =>
    set((state) => ({ terminalOutputs: [...state.terminalOutputs, output] })),
}));
