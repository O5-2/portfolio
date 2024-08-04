const LEETCODE_NAMES = ['1-bit_and_2-bit_Characters.py', '2_Keys_Keyboard.py', '3Sum.py', 'Add_Binary.py', 'Add_Digits.py', 'Add_Two_Numbers.py', 'Add_Two_Numbers_II.py', 'Arranging_Coins.py', 'Array_Partition_I.py', 'Assign_Cookies.py', 'Backspace_String_Compare.py', 'Base_7.py', 'Baseball_Game.py', 'Binary_Gap.py', 'Binary_Number_with_Alternating_Bits.py', 'Binary_Search_Arranging_Coins.py', 'Binary_Tree_Paths.py', 'Buddy_Strings.py', 'Can_Place_Flowers.py', 'Climbing_Stairs.py', 'Complex_Number_Multiplication.py', 'Contains_Duplicate.py', 'Convert_a_Number_to_Hexadecimal.py', 'Count_and_Say.py', 'Custom_Sort_String.py', 'Default_Dict_Valid_Anagram.py', 'Delete_Node_in_a_Linked_List.py', 'Detect_Capital.py', 'Distribute_Candies.py', 'Excel_Sheet_Column_Number.py', 'Excel_Sheet_Column_Title.py', 'Factorial_Trailing_Zeroes.py', 'Find_Largest_Value_in_Each_Tree_Row.py', 'Find_Pivot_Index.py', 'Find_Smallest_Letter_Greater_Than_Target.py', 'Find_the_Difference.py', 'First_Bad_Version.py', 'First_Unique_Character_in_a_String.py', 'Fizz_Buzz.py', 'Flipping_an_Image.py', 'Generate_Parentheses.py', 'Goat_Latin.py', 'Guess_Number_Higher_or_Lower.py', 'Hamming_Distance.py', 'Happy_Number.py', 'Implement_Rand10()_Using_Rand7().py', 'Implement_strStr.py', 'Integer_Break.py', 'Integer_to_Roman.py', 'Intersection_of_Two_Arrays.py', 'Is_Subsequence.py', 'Island_Perimeter.py', 'Jewels_and_Stones.py', 'K-diff_Pairs_in_an_Array.py', 'Keyboard_Row.py', 'Keys_and_Rooms.py', 'Kth_Smallest_Element_in_a_Sorted_Matrix.py', 'Largest_Number_At_Least_Twice_of_Others.py', 'Lemonade_Change.py', 'Length_of_Last_Word.py', 'Letter_Case_Permutation.py', 'Letter_Combinations_of_a_Phone_Number.py', 'License_Key_Formatting.py', 'Longest_Common_Prefix.py', 'Longest_Continuous_Increasing_Subsequence.py', 'Longest_Palindrome.py', 'Magic_Squares_in_Grid.py', 'Majority_Element.py', 'Masking_Personal_Information.py', 'Max_Chunks_To_Make_Sorted.py', 'Max_Consecutive_Ones.py', 'Max_Increase_to_Keep_City_Skyline.py', 'Maximize_Distance_to_Closest_Person.py', 'Maximum_Depth_of_Binary_Tree.py', 'Maximum_Product_of_Three_Numbers.py', 'Minimum_Depth_of_Binary_Tree.py', 'Minimum_Index_Sum_of_Two_Lists.py', 'Minimum_Time_Difference.py', 'Missing_Number.py', 'Most_Common_Word.py', 'Multiply_Elements.py', 'Next_Greater_Element_I.py', 'Nim_Game.py', 'Nth_Digit.py', 'Number_Complement.py', 'Number_of_1_Bits.py', 'Number_of_Lines.py', 'Number_of_Lines_To_Write_String.py', 'Number_of_Segments_in_a_String.py', 'Palindrome_Linked_List.py', 'Palindrome_Number.py', 'Palindromic_Substrings.py', 'Pascals_Triangle.py', 'Pascals_Triangle_II.py', 'Path_Sum.py', 'Path_Sum_II.py', 'Path_Sum_II_Optimized.py', 'Path_Sum_II_Optimized_Backtracking.py', 'Peak_Index_in_a_Mountain_Array.py', 'Perfect_Number.py', 'Plus_One.py', 'Positions_of_Large_Groups.py', 'Power_of_Four.py', 'Power_of_Two.py', 'Prime_Number_of_Set_Bits_in_Binary_Representation.py', 'Rabbits_in_Forest.py', 'Ransom_Note.py', 'Rectangle_Overlap.py', 'Remove_Element.py', 'Remove_Linked_List_Elements.py', 'Reordered_Power_of_2.py', 'Repeated_String_Match.py', 'Replace_Words.py', 'Reshape_the_Matrix.py', 'Reverse_Bits.py', 'Reverse_Integer.py', 'Reverse_Linked_List.py', 'Reverse_String.py', 'Reverse_String_II.py', 'Reverse_Vowels_of_a_String.py', 'Reverse_Words_in_a_String_III.py', 'Roman_to_Integer.py', 'Rotate_String.py', 'Rotated_Digits.py', 'Same_Tree.py', 'Score_of_Parentheses.py', 'Search_Insert_Position.py', 'Set_Mismatch.py', 'Single_Number.py', 'Spiral_Matrix.py', 'Sqrt(x).py', 'Student_Attendance_Record_I.py', 'Subsets.py', 'Sum_Root_to_Leaf_Numbers.py', 'Sum_of_Square_Numbers.py', 'Sum_of_Two_Integers.py', 'Symmetric_Tree.py', 'Teemo_Attacking.py', 'Third_Maximum_Number.py', 'Toeplitz_Matrix.py', 'Transpose_Matrix.py', 'Two_Sum_II.py', 'Ugly_Number.py', 'Unique_Morse_Code_Words.py', 'Unique_Paths.py', 'Valid_Anagram.py', 'Valid_Palindrome.py', 'Valid_Perfect_Square.py'];
const HACKERRANK_NAMES = ['A_Very_Big_Sum.kt', 'Birthday_Cake_Candles.kt', 'Birthday_Chocolate.kt', 'Breaking_the_Records.kt', 'Cats_and_a_Mouse.kt', 'Compare_the_Triplets.kt', 'Counting_Valleys.kt', 'Designer_PDF_Viewer.kt', 'Divisible_Sum_Pairs.kt', 'Extra_Long_Factorials.kt', 'Find_Digits.kt', 'Grading_Students.kt', 'Migratory_Birds.kt', 'Mini-Max_Sum.kt', 'Simple_Array_Sum.kt', 'Sock_Merchant.kt', 'Staircase.kt', 'The_Hurdle_Race.kt', 'Time_Conversion.kt', 'Utopian_Tree.kt', 'Viral_Advertising.kt', 'a-very-big-sum', 'circular-array-rotation', 'diagonal-difference', 'plus-minus', 'staircase'];

function linkifyLC(s) {
    s = s.slice(0, -3);
    s = s.replaceAll("_", " ");
    return s;
}

function linkifyHR(s) {
    s = s.slice(0, -3);
    s = s.replaceAll("_", " ");
    s = s.replaceAll("-", " ");
    for (let i = 0; i < s.length; i++) {
        if ((i == 0) || (s[i-1] == " ")) {
            s = s.slice(0, i) + s[i].toUpperCase() + s.slice(i+1);
        }
    }
    return s;
}

lc = document.getElementById("lc");
for (i of LEETCODE_NAMES) {
    let link = document.createElement("a");
    link.setAttribute("href", "https://github.com/O5-2/leetcode/blob/master/" + i);
    link.textContent = linkifyLC(i);
    let p = document.createElement("p");
    lc.appendChild(p);
    p.appendChild(link);
}
hr = document.getElementById("hr");
for (i of HACKERRANK_NAMES) {
    let link = document.createElement("a");
    link.setAttribute("href", "https://github.com/O5-2/hacker-rank/blob/master/" + i);
    link.textContent = linkifyHR(i);
    let p = document.createElement("p");
    hr.appendChild(p);
    p.appendChild(link);
}

// TODO: Leetcode and Hackerrank.
// Remaining thing to do: Collect the file names for HackerRank.