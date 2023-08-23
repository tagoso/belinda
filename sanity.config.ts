import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from '@sanity/vision'
import schemas from "./sanity/schemas";


const config = defineConfig({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'lt3dva1e',
    dataset: "production",
    tltle: "Belinda Theme Builder",
    apiVersion: "2023-08-07",
    basePath: "/admin",
	plugins: [deskTool(), visionTool()],
	schema: { types: schemas }
});

export default config