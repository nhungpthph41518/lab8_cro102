import React, { useState, useEffect } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { FIRESTORE } from "./firebaseConfig";
const ITEMS_COLLECTION = collection(FIRESTORE, "items");



const Bai72 =() => {
    const [text, setText] = useState('');
    const handleInsert = async () => {
        try {
            const tailieu = await addDoc(collection(FIRESTORE, 'SinhViens'), {

                text: text

            });
            console.log("Tài liệu được ghi bới ID=: " , tailieu.id);
            setText('');
        } catch (error) {
            console.log("Lỗi ghi dữ liệu: ", error);
            
        }
    }
return (
    <View style={{marginTop: 50}}>
        <TextInput placeholder="Nhập tên sinh viên: " value={text} onChangeText={setText}/>
        <Button title="Thêm dữ liệu" onPress={handleInsert}/>
    </View>
)
}


export default Bai72;