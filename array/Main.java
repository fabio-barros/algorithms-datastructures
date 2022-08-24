package array;

public class Main {

    public static void fillArray(int[] array) {
        for (int i = 0; i < array.length; i++) {
            array[i] = i;
        }
    }

    public static void printArray(int[] array) {
        for (int i = 0; i < array.length; i++) {
            System.out.println("array[" + i + "]=" + array[i]);
        }
    }

    public static void main(String[] args) {
        int[] arr = new int[5];
        printArray(arr);
        fillArray(arr);
        printArray(arr);
    }
}