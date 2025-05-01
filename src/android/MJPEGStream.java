package org.apache.cordova.plugin;

import java.io.InputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

public class MJPEGStream extends InputStream {
    private int offset = 0;
    private byte[] currentChunk;

    @Override
    public int read() throws IOException {
        if (currentChunk == null || offset >= currentChunk.length) {
            currentChunk = buildNextChunk();
            offset = 0;
        }
        return currentChunk[offset++] & 0xFF;
    }

    private byte[] buildNextChunk() {
        byte[] jpeg = MJPEGFrameBuffer.get();
        if (jpeg == null) {
            try {
                Thread.sleep(10);
            } catch (InterruptedException ignored) {}
            return new byte[0];
        }

        String boundary = "--frame\r\nContent-Type: image/jpeg\r\nContent-Length: " + jpeg.length + "\r\n\r\n";
        byte[] header = boundary.getBytes(StandardCharsets.UTF_8);

        byte[] chunk = new byte[header.length + jpeg.length + 2];
        System.arraycopy(header, 0, chunk, 0, header.length);
        System.arraycopy(jpeg, 0, chunk, header.length, jpeg.length);
        chunk[chunk.length - 2] = '\r';
        chunk[chunk.length - 1] = '\n';

        return chunk;
    }
}
