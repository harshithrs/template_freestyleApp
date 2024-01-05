# test_freestyle_app.py

import unittest
import freestyle_app

class TestFreestyleApp(unittest.TestCase):
    def test_display_hello_world(self):
        # Redirect the standard output to a StringIO object to capture the printed message
        import sys
        from io import StringIO
        captured_output = StringIO()
        sys.stdout = captured_output

        # Call the display_hello_world function from the freestyle_app module
        freestyle_app.display_hello_world()

        # Get the printed message from the StringIO object
        printed_message = captured_output.getvalue().strip()

        # Assert that the printed message is "Hello, World!"
        self.assertEqual(printed_message, "Hello, World!")

if __name__ == '__main__':
    unittest.main()