import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';

const PDFBill = ({ orders, totalAmount }) => {
  const MyDocument = () => (
    <Document>
      <Page style={{ padding: 20 }}>
        <View>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Restaurant POS</Text>
          <Text style={{ fontSize: 14, marginBottom: 10 }}>Order Summary:</Text>
          {orders.map((order, index) => (
            <View key={index} style={{ marginBottom: 5 }}>
              <Text>
                {order.name} - ₹{order.price.toFixed(2)}
              </Text>
            </View>
          ))}
          <Text style={{ fontSize: 14, marginTop: 10 }}>
            Total Amount: ₹{totalAmount.toFixed(2)}
          </Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="pdf-bill">
      <PDFDownloadLink document={<MyDocument />} fileName="bill.pdf">
        {({ loading }) =>
          loading ? 'Generating Bill...' : 'Download Bill as PDF'
        }
      </PDFDownloadLink>
    </div>
  );
};

export default PDFBill;
