import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import "@testing-library/jest-dom";
import Footer from "../components/Footer";

test("renders footer copyright text", () => {
  render(<Footer />);

  const element = screen.getByText("© 2026 OptiVision. All Rights Reserved.");
  
  expect(element).toBeInTheDocument();
});