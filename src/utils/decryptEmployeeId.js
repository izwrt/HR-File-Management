import CryptoJS from "crypto-js";

const public_key = process.env.EMPLOYEE_ENCRYPTOR_PUBLIC_KEY;

const EMPLOYEEID_ENCRYPTION_KEY = CryptoJS.enc.Hex.parse(public_key);

export const decryptEmployeeId = (encryptedEmployeeId) => {
  try {
    if (!encryptedEmployeeId) return encryptedEmployeeId;

    const [ivHex, encryptedDataHex] = encryptedEmployeeId.split(":");
    if (!ivHex || !encryptedDataHex) {
      throw new Error("Invalid encryptedEmployeeId format");
    }

    const iv = CryptoJS.enc.Hex.parse(ivHex);
    const encryptedData = CryptoJS.enc.Hex.parse(encryptedDataHex);

    const decrypted = CryptoJS.AES.decrypt(
      { ciphertext: encryptedData },
      EMPLOYEEID_ENCRYPTION_KEY,
      { iv }
    );

    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error(`decryptEmployeeId: Decryption failed: ${error.message}`);
    throw error;
  }
};
