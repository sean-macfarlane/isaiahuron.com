"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaX } from "react-icons/fa6";

export default function ProductPopup() {
  const [product, setProduct] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);

  const PRODUCT_ID = "gid://shopify/Product/15072149111153";
  const STORE_DOMAIN = "fatbeats.myshopify.com";
  const ACCESS_TOKEN = "ad92fa42b0f37aa3cb9bedb228fe7146";

  // Show on first visit only
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 600);
  }, []);

  // Fetch product data
  useEffect(() => {
    const query = `
      {
        product(id: "${PRODUCT_ID}") {
          title
          handle
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    `;

    fetch(`https://${STORE_DOMAIN}/api/2023-10/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": ACCESS_TOKEN,
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data?.product) {
          setProduct(res.data.product || {});
        }
      })
      .catch(console.error);
  }, []);

  if (!product) return null;
  const image = product.images.edges[0]?.node;

  // Handle background click to close
  const handleOverlayClick = (e) => {
    if (e.target.id === "popup-overlay") {
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="popup-overlay"
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
        >
          {/* Fixed close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="fixed top-6 right-6 text-3xl font-bold text-white hover:text-gray-800 z-[60]"
          >
            <FaX size="24" />
          </button>

          {/* Modal card */}
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white max-w-md w-full p-6 rounded-lg shadow-xl relative text-center z-[55]"
          >
            {image && (
              <img
                src={image.url}
                alt={image.altText || product.title}
                className="mb-4 rounded-lg w-full object-cover"
              />
            )}
            <h2 className="text-xl font-bold mb-4">{product.title}</h2>
            <a
              href={`https://${STORE_DOMAIN}/products/${product.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition"
            >
              PRE-ORDER
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
