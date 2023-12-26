'use client'
import { Typography } from "@mui/material";

export default function ProjectView({ params }: { params: { projectid: string }}) {
  return (
    <Typography>You&apos;re viewing the {params.projectid} project</Typography>
  )
}
