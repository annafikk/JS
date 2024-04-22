// =========== STRING METHODS

// LENGTH
// let text = "abc"
// let banyak_kata = text.length
// console.log("Berapa Jumlah Kata? ", banyak_kata)

// REPLACE
// let original = "let him sleep!"
// let modified = original.replace("sleep", "cook")
// console.log(modified)

// TRIM
// let teks1 = "    Hello World!    "
// let teks2 = teks1.trim()
// console.log("Pertama : " + teks1)
// console.log("Kedua : " + teks2)

// SPLIT
// let teks = "a, b, c, d, e, f"
// const arr = teks.split(", ")
// console.log(arr[2], arr[3])

// CONCAT
// let teks1 = "halo"
// let teks2 = "sayang"
// let teks3 = teks1.concat(" ", teks2)
// console.log(teks3)

// TO LOWER CASE
// let teks = "KE HURUF KECIL"
// let kecil = teks.toLowerCase()
// console.log(teks)
// console.log(kecil)

// TO UPPER CASE
// let teks = "ke huruf besar"
// let besar = teks.toUpperCase()
// console.log(teks)
// console.log(besar)

// =========== ARRAY METHODS

// POP & PUSH
// const buah = ["Pisang", "Jeruk", "Apel", "Mangga"]
// console.log(buah)

// const dihapus = buah.pop()
// console.log("Apa yang dihapus?", dihapus)
// console.log("Setelah Pop : ", buah)

// buah.push(dihapus)
// console.log("Apa yang ditambahin?", dihapus)
// console.log("Setelah Push : ", buah)

// buah.push("Durian")
// console.log("Setelah Push Lagi : ", buah)

// SHIFT & UNSHIFT
// const buah = ["Pisang", "Jeruk", "Apel", "Mangga"]
// console.log(buah)

// const dihapus = buah.shift()
// console.log("Apa yang dihapus? ", dihapus)
// console.log("Setelah Shift : ", buah)

// buah.unshift(dihapus)
// console.log("Apa yang ditambahkan? ", dihapus)
// console.log("Setelah Unshift : ", buah)

// buah.unshift("Durian", "Kiwi")
// console.log("Setelah Unshift Lagi : ", buah)

// CONCAT
// const makanan = ["Mie Ayam", "Bakso", "Seblak"]
// const minuman = ["Es Teh", "Kopi", "Teh Anget"]
// const dessert = ["Cake"]

// console.log("Makanan : ", makanan)
// console.log("Minuman : ", minuman)
// console.log("Dessert : ", dessert)

// const concat = makanan.concat(minuman,dessert)
// console.log("Hasil Concat : ", concat)

// SPLICE
// array.splice(start, deleteCount, item1, item2, ... )
// const buah = ["Pisang", "Jeruk", "Apel", "Mangga"]
// console.log("Original : ", buah)

// const dihapus = buah.splice(0, 1, "Kiwi")
// console.log("Splice : ", buah)

// SLICE
// array.slice(StartIndex, EndIndex) (SI < EI)
const buah = ["Pisang", "Jeruk", "Apel", "Mangga"]
console.log("Original : ", buah)

const citrus = buah.slice(0, 1)
console.log("Slice : ", citrus)