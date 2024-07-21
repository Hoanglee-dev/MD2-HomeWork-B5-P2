/** Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành. */
function countTo99Alert() {
  for ( let i = 1; i <=100; i++) {
    console.log(i)
    if ( i == 99 ){
      alert("Đã hoàn thành")
    }
  }
}

/** Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ. */
function checkTemperature() {
  let temp = +prompt('Hiện tại bao nhiêu độ ?')
  if ( temp > 100) {
    alert('Nhiệt độ quá cao! Vui lòng giảm nhiệt độ.')
  }else {
    if (temp < 20) {
      alert('Nhiệt độ quá thấp! Vui lòng tăng nhiệt độ.')       
    }else {
      alert('Nhiệt độ ở mức an toàn.')   
  } 
  }
}

/** Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên. */
function first20Fibonacci() {
  let f1 = 0;
  let f2 = 1;
  console.log(f1)
  console.log(f2)
  for ( let i = 2; i < 20; i++) {
    let Fib = f1 + f2;
    console.log(Fib)
    f1 = f2; // cập nhật giá trị f1 - f2
    f2 = Fib
  }
}

/** Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5 */
function firstFibDiv5() {
  let f1 = 0;
  let f2 = 1;
  for ( let i = 2; i <= 20; i++) {
    let Fib = f1 + f2;
    f1 = f2; 
    f2 = Fib
    if (Fib % 5 ==  0) {
      console.log(Fib)
      break;
    }
  }
}

/** Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci. */
function sumFirstFib20() {
  let f1 = 0;
  let f2 = 1;
  sum = f1 + f2;
  for ( let i = 2; i < 20; i++) {
    let Fib = f1 + f2;
    sum += Fib
    f1 = f2; 
    f2 = Fib
  }
  console.log("Tổng 20 số đâU tiên Fib là : ", sum)
}

/** Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên. */
function sumFirst30Div7() {
  let sum = 0; // biến lưu tổng các số chia hết cho 7
  let count = 0; // biến đếm số lượng các số chia hết cho 7
  let number = 1; // biến kiểm tra số hiện tại
  while ( count < 30 ) {
    if (number % 7 === 0) {
      sum += number
      count++
    }
    number++
  }
  console.log("tổng của 30 số chia hết cho 7 đầu tiên là : " + sum)
}

/** Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz". */
function fizzBuzz() {
  for(let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      document.write('FizzBuzz<br>')
    }else {
      if (i % 3 === 0) {
        document.write('Fizz<br>')
      } else {
        if (i % 5 === 0 ) {
          document.write('Buzz<br>')
        } else {
          document.write(i + "<br>")
        }
      }
    }
  }

}