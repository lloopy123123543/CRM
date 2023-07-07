"use client"
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import CreateUser from './components/createUser'
export default function page() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    >
            <div className="container mx-auto w-full mt-28">
                <CreateUser></CreateUser>

    </div>
    </motion.div>
  )
}
