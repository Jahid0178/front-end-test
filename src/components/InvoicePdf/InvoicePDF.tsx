"use client";

import React, { useEffect, useState } from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    padding: 10,
  },
  table: {
    display: "flex",
    width: "auto",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    alignItems: "center",
    height: 30,
  },
  headerCell: {
    width: "20%",
    textAlign: "left",
    paddingLeft: 5,
  },
  cell: {
    width: "20%",
    textAlign: "left",
    paddingLeft: 5,
  },
});

const InvoicePDF = () => {
  const [invoiceData, setInvoiceData] = useState([]);
  const [month, date, year] = new Date().toLocaleDateString("en-US").split("/");

  useEffect(() => {
    fetch("http://localhost:3000/api/submit-form", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setInvoiceData(data.data));
  }, []);

  return (
    <Document>
      <Page size={{ width: 900, height: 1200 }}>
        <View style={styles.page}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              padding: 10,
            }}
          >
            <View>
              <Text style={{ marginBottom: 5 }}>Invoice No # 190321</Text>
              <Text style={{ marginBottom: 5 }}>
                Date: {`${date}/${month}/${year}`}
              </Text>
            </View>
            <View>
              <Text>Logo</Text>
            </View>
            <View>
              <Text style={{ marginBottom: 5 }}>1474 Avenue Kwame</Text>
              <Text style={{ marginBottom: 5 }}>NKRUMAH 10 BP 13395</Text>
              <Text style={{ marginBottom: 5 }}>
                10 Ouagadougou, Burkina Faso
              </Text>
              <Text style={{ marginBottom: 5 }}>finance@lizetransport.com</Text>
              <Text style={{ marginBottom: 5 }}>+1(226)50272383</Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              padding: 10,
            }}
          >
            <View>
              <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
                Invoice To:
              </Text>
              <Text style={{ marginBottom: 5 }}>John Doe</Text>
              <Text style={{ marginBottom: 5 }}>123 Main Street</Text>
              <Text style={{ marginBottom: 5 }}>Anytown, USA</Text>
            </View>
            <View>
              <Text style={{ marginBottom: 5 }}>1474 Avenue Kwame</Text>
              <Text style={{ marginBottom: 5 }}>NKRUMAH 10 BP 13395</Text>
              <Text style={{ marginBottom: 5 }}>
                10 Ouagadougou, Burkina Faso
              </Text>
              <Text style={{ marginBottom: 5 }}>finance@lizetransport.com</Text>
            </View>
          </View>
          <View style={{ padding: 10 }}>
            <View style={styles.table}>
              {/* Header row */}
              <View style={styles.row}>
                <Text style={styles.headerCell}>Products</Text>
                <Text style={styles.headerCell}>Description</Text>
                <Text style={styles.headerCell}>Reverstion</Text>
                <Text style={styles.headerCell}>Trip</Text>
                <Text style={styles.headerCell}>Total</Text>
              </View>
              {/* Product data */}
              {invoiceData.map((invoice) => {
                const { _id, product, description, trip, total, date } =
                  invoice;
                return (
                  <View style={styles.row} key={_id}>
                    <Text
                      style={{ ...styles.cell, textTransform: "uppercase" }}
                    >
                      {product}
                    </Text>
                    <Text style={styles.cell}>{description}</Text>
                    <Text style={styles.cell}>{date}</Text>
                    <Text style={styles.cell}>{trip}</Text>
                    <Text style={styles.cell}>{total}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ textAlign: "right", marginBottom: 5 }}>
              Sub-Total: {/* @ts-ignore */}
              {invoiceData.reduce((acc, curr) => acc + curr.total, 0)}
            </Text>
            <Text style={{ textAlign: "right" }}>
              {/* @ts-ignore */}
              Total: {invoiceData.reduce((acc, curr) => acc + curr.total, 0)}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePDF;
