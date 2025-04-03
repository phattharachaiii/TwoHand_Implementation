<script>
  let username = '';
  let email = '';
  let password = '';
  let confirmPassword = '';
  let isSeller = false; // ตัวเลือกว่าผู้ใช้จะเปิดร้านหรือไม่
  let message = '';
  let isLoading = false;

  const registerUser = async () => {
    if (isLoading) return;
    isLoading = true;
    message = '';
    
    try {
      // ส่งข้อมูลไปยัง backend
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, confirmPassword, isSeller })
      });

      const result = await response.json();

      // ตรวจสอบว่าการลงทะเบียนสำเร็จหรือไม่
      if (response.ok) {
        message = `User registered successfully!`;
      } else {
        message = `Error: ${result.message || result.error}`;
      }
    } catch (err) {
      message = `Error: ${err.message}`;
    } finally {
      isLoading = false;
    }
  };
</script>

<style>
  .form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .form input, .form button {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .form button {
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
  }
  .form button:disabled {
    background-color: #ccc;
  }
  .form label {
    display: inline-block;
    margin: 5px 0;
  }
</style>

<div class="form">
  <h2>Register</h2>
  <input
    type="text"
    placeholder="Username"
    bind:value={username}
    required
  />
  <input
    type="email"
    placeholder="Email"
    bind:value={email}
    required
  />
  <input
    type="password"
    placeholder="Password"
    bind:value={password}
    required
  />
  <input
    type="password"
    placeholder="Confirm Password"
    bind:value={confirmPassword}
    required
  />
  <label>
    <input type="checkbox" bind:checked={isSeller} />
    Open Shop as Seller
  </label>
  <button on:click={registerUser} disabled={isLoading}>
    {isLoading ? "Registering..." : "Register"}
  </button>
  {#if message}
    <p>{message}</p>
  {/if}
</div>
