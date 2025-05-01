package org.apache.cordova.plugin;

public class MJPEGFrameBuffer {
    private static volatile byte[] latest;

    public static void update(byte[] jpeg) {
        latest = jpeg;
    }

    public static byte[] get() {
        return latest;
    }
}
