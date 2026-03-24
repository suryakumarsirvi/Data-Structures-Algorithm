// Mirrored Right Triangle Pattern

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

function MirroredTrin(num) {
    let val = ""
    for (let i = 1; i <= num; i++) {
        val = " ".repeat(num - i) + "*".repeat(i)
        console.log(val)
        val = ""
    }
}

MirroredTrin(5)