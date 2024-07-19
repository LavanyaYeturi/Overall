package tasks;

import java.util.*;
import java.util.Scanner;

public class atm {
	public static Scanner sc = new Scanner(System.in);
	public static int choice;
	public static boolean flag = false;
	static String i;
	static String j;
	static int row;
	static int column;
	static String[][] storedData = { { "21911026", "sam" }, { "21911018", "lav" }, { "21911012", "str" } };

	public static void loginAccDetails() {
		System.out.println("");
		System.out.println("*****WELCOME TO FEUJI ATM SERVICES*****");

		System.out.println("----------please login to your account-------");

		System.out.println("Please Enter Your Account Number :");
		i = sc.next();
		
		System.out.println("Please Enter Your Account password :");
		j = sc.next();
		validation(i, j);
	}
      
	public static void validation( String i, String j) {

		for (int row = 0; row < storedData.length; row++) {
			for (int column = 0; column < storedData[row].length; column++) {
				if (storedData[row][0].equals(i) && storedData[row][1].equals(j)) 
				{
					flag = true;
					System.out.println("successfully you have been logged in to your account");
				}
			}
			
		}
		do {

			if (flag) {
				System.out.println(" ");

				System.out.print("Welcome To Your Account:" + i);
				System.out.println(" ");
				System.out.println("Type 1 for Balance Checking");
				System.out.println("Type 2 for Deposit");
				System.out.println("Type 3 for Withdrawl");
				System.out.println("Type 4 for Logout");
				System.out.println("Type 5 for Exit");
				System.out.println("  ");
				System.out.println("Enter Your Choice : ");
			} else {
				System.out.print("Invalid account number or password");

				loginAccDetails();

			}

			choice = sc.nextInt();
			switch (choice) {
			case 1:
				CheckBalance();
				break;
			case 2:
				Deposit();
				break;
			case 3:
				Withdrawl();
				break;
			case 4:
				Logout();
				break;
			case 5:
				Exit();
			}
		} while (choice < 4);

	}

	public static void main(String[] args) {

		loginAccDetails();
	}

	public static void CheckBalance() {
		System.out.println("0.00");
	}

	public static void Deposit() {
		System.out.println("Your Deposits are Coming Soon");

	}

	public static void Withdrawl() {
		System.out.println("WITHDRAWLS ARE NOT YET STARTED");

	}

	public static void Logout() {
		System.out.println("Logout Succesfull");
		flag = false;
		loginAccDetails();
	}

	public static void Exit() {
		System.out.println("YOU HAVE BEEN EXITED SUCCESSFULLY");

	}
}

