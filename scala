object as{
	var item1: Int = 10 
	var item2: Int = 15
	var item3: Int = 20
	
	val item1price : Double = 40
	val item2price : Double = 25
	val item3price : Double = 16		
	
	def main(args: Array[String]){
		while(true){
			println("1. Stock")
			println("2. Item Prices")
			println("3. Customer")
			
			print("Enter your Choice: ")
			val x=scala.io.StdIn.readInt()
			
			x match{
				case 1 =>stock()				
				case 2 =>prices()				
				case 3 =>customer()				
				case _ =>println("Enter valid choice !")
			}
		}
	}
	
	def customer(): Unit = {
		var price1,price2,price3 : Double = 0
	
		print("No of Item1: ")
		val a=scala.io.StdIn.readInt()
		if(item1>=a){
			item1 = item1 -  a;	
			price1 = a*item1price	
		}
		else{
			println("no number of items in the stock")
		}		
		
		print("No of Item2: ")
		val b=scala.io.StdIn.readInt()
		if(item2>=b){
			item2 = item2- b;
			price2 = b*item2price
		}
			else{
			println("no number of items in the stock")
		}
		
		print("No of Item3: ")
		val c=scala.io.StdIn.readInt()
		if(item3>=c){
			item3 =  item3 - c;
			price3 = c*item3price
		}
		else{
			println("no number of items in the stock")
		}
		
		var Total = price1 + price2 + price3		
		println("\nTotal Price is : " + Total + "\n")
	}	

	def stock(): Unit = {
		println("Item1 : " + item1) 
		println("Item2 : " + item2) 
		println("Item3 : " + item3) 
	}	
	
	def prices(): Unit = {
		println("Price of Item1 : " + item1price) 
		println("Price of Item2 : " + item2price) 
		println("Price of Item3 : " + item3price) 
	
	}
	
}
//sachin tharuka sandeep muthumala

//hellow worlad