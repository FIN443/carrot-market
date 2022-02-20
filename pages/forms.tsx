import React, { useState } from "react";

// Why use React Hook Form
// Less code
// Better validation
// Better Errors (set, clear, display)
// Have control over inputs
// Dont deal with events
// Easier Inputs

export default function Forms() {
  return (
    <form>
      <input type="text" placeholder="Username" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <input type="submit" value="Create Account" />
    </form>
  );
}
