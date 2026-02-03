import geocachingAxios from "./geocaching-axios";


describe("REAL interceptor test", () => {
    test("triggers interceptor on real 401 response", async () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
        
        try {
            // Make a real HTTP call that returns 401
            await geocachingAxios.get("https://httpbin.org/status/401", {
                // @ts-ignore
                user: { sub: "real-user-123" },
            });
        } catch (err: any) {
            // Confirm interceptor ran
            expect(consoleSpy).toHaveBeenCalledWith("--- DEBUG ---");
            expect(consoleSpy).toHaveBeenCalledWith("Interceptor triggered:", 401);
            expect(consoleSpy).toHaveBeenCalledWith("Attempting token refresh...");
            expect(consoleSpy).toHaveBeenCalledWith("real-user-123");
            
            // Confirm retry flag was added
            expect(err.config._retry).toBe(true);
        }
        
        consoleSpy.mockRestore();
    });
});
