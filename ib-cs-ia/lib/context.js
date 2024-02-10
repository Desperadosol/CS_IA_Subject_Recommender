/*
 * This file creates a context for user data using React's createContext function.
 * The UserContext is exported and can be used in other components to provide and consume user data.
 * The default value of the context is an object with user and username properties, both set to null.
 */
import { createContext } from "react";

export const UserContext = createContext({ user: null, username: null })