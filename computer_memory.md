# Computer Memory

A computer is a device that is electronic and that accepts data, processes that data, and gives the desired output. It performs programmed computation with great accuracy and high speed. In other words, the computer takes the data as input, stores the data/instructions in the memory (use them when required), then processes the data and converts it into useful information, and finally, it gives the output.

## What is memory?

Computer memory is just like the human brain. It is used to store data/information and instructions. It is a data storage unit or a data storage device where data is to be processed and instructions required for processing are stored. It can store both the input and the output.

## In general, memory is of three types

- Primary/Main Memory.
- Secondary Memory.
- Cache Memory.

### 1. Primary Memory

It si also known as the main memory of the computer system. It is used to store data and programs ro instructions during the computer operations. I uses semiconductor technology, hence it is called semiconductor memory. Primary memory is of two types:

- **(i) RAM (Random Access Memory):** It is a volatile memory. Volatile memory stores information based on the power supply. If the power supply failed/interrupted/stopped, all the data and the information on this memory will be lost. RAM is used for booting up or start the computer. It temporarily stores programs/data which has to be executed by the processor. RAM is of two types:

  - **S RAM (Static RAM):** It uses transistors and the circuits of this memory fir it to become capable of retaining their state as long as the power is applied. This memory consists of a number of flip flops with each flip flop storing 1 bit. It has less access time so it is faster.
  - **D RAM (Dynamic RAM):** It is uses capacitors and transistors, and stores the data as a charge on teh capacitors. They contain thousands of memory cells. It needs refreshing of charge on capacitors after a few milliseconds. This memory is slower than S RAM.

- **(ii) ROM (Read Only Memory):** It is a non-volatile memory. Non-volatile memory stores information even when there is a power supply failed/ interrupted/stopped. ROM is used to store information that is used to operate the system. As its name refers to read-only memory, we can only read the programs and data that is stored on it. It contains some electronic fuses that can be programmed for a piece of specific information. The information stored in the ROM in binary format. It is also known as permanent memory. ROM is of four types:

  - **MROM (Masked ROM):**Hard-wired devices with a pre-programmed collection of data or instructions were the first ROMs. Masked ROMs are a type of low-cost ROM that works in this way. "Mask" refers to parts of an integrated circuit, a thin electronic circuit for processing data, that is covered with opaque plates called photomasks. These plates contain transparencies, or holes, to allow light in certain areas while blocking light in others to create distinctive patterns. Mask work, comprising a process known as photolithography, primarily serves as a sort of intellectual property protection, reserving reproduction of the product to the integrated circuit manufacturer. ***INTERESTING!***
  - **PROM (Programmed Read Only Memory):**  This read-only memory is modifiable once by the user. The user purchases a blank PROM and uses a PROM program to put the required contents into the PROM. Its content can’t be erased once written.
  - **EPROM (Erasable Programmed Read Only Memory):** It is an extension to PROM where you can erase the content of ROM by exposing it to Ultraviolet rays for nearly 40 minutes.
  - **EEPROM (Electronic Erasable Programmed Read Only Memory):** Here the written contents can be erased electrically. You can delete and reprogramme EEPROM up to 10,000 times. Erasing and programming take very little time, i.e., nearly  4 -10 ms(milliseconds). Any area in an EEPROM can be wiped and programmed selectively.

#### Characteristics of the Main Memory

- It is faster than the secondary memory.
- It used semiconductors, named after them them semiconductor memory.
- It is usually a volatile memory -explained below-.
- It si the main memory of the computer.
- A computer cannot run without primary memory.

### 2. Secondary Memory

It is also known as auxiliary memory and backup memory. It is a non-volatile memory and used to store a large amount of data or information. The data or information stored in secondary memory is permanent, and it is slower than primary memory. A CPU cannot access secondary memory directly. The data/information from the auxiliary memory is first transferred to the main memory, and then the CPU can access it.

#### Types of secondary memory

- **(i) Magnetic Tapes:** Magnetic tape is a long, narrow strip of plastic film with a thin, magnetic coating on it that is used for magnetic recording. Bits are recorded on tape as magnetic patches called RECORDS that run along many tracks. Typically, 7 or 9 bits are recorded concurrently. Each track has one read/write head, which allows data to be recorded and read as a sequence of characters. It can be stopped, started moving forward or backward, or rewound.
- **(ii) Magnetic Disks:** A magnetic disc is a circular metal or a plastic plate and these plates are coated with magnetic material. The disc is used on both sides. Bits are stored in magnetized surfaces in locations called tracks that run in concentric rings. Sectors are typically used to break tracks into pieces.

![Magnetic Disk](https://media.geeksforgeeks.org/wp-content/uploads/20210601000012/ii1-300x226.png)
Hard discs are discs that are permanently attached and cannot be removed by a single user.

- **(iii) Optical Disks:** It’s a laser-based storage medium that can be written to and read. It is reasonably priced and has a long lifespan. The optical disc can be taken out of the computer by occasional users. Types of Optical Disks:

  - **1. SC - ROM:**

    - It’s called Compact Disk. Only read from memory.
    - Information is written to the disc by using a controlled laser beam to burn pits on the disc surface.
    - It has a highly reflecting surface, which is usually aluminum.
    - The diameter of the disc is 5.25 inches.
    - 16000 tracks per inch is the track density.
    - The capacity of a CD-ROM is 600 MB, with each sector storing 2048 bytes of data.
    - The data transfer rate is about 4800KB/sec. & the new access time is around 80 milliseconds.
  - **2. WORM-(WRITE ONCE READ MANY):**
    - A user can only write data once.
    - The information is written on the disc using a laser beam.
    - It is possible to read the written data as many times as desired.
    - They keep lasting records of information but access time is high.
    - It is possible to rewrite updated or new data to another part of the disc.
    - Data that has already been written cannot be changed.
    - Usual size – 5.25 inch or 3.5 inch diameter.
    - The usual capacity of 5.25 inch disk is 650 MB,5.2GB etc.
  - **3. DVDs:**
    - The term “DVD” stands for “Digital Versatile/Video Disc,” and there are two sorts of DVDs: (i)DVDR (writable) and (ii) DVDRW (Re-Writable).
    - DVD-ROMS (Digital Versatile Discs): These are read-only memory (ROM) discs that can be used in a variety of ways. When compared to CD-ROMs, they can store a lot more data. It has a thick polycarbonate plastic layer that serves as a foundation for the other layers. It’s an optical memory that can read and write data.
    - DVD-R: It is a writable optical disc that can be used just once. It’s a DVD that can be recorded. It’s a lot like WORM. DVD-ROMs have capacities ranging from 4.7 to 17 GB. The capacity of 3.5 inch disk is 1.3 GB.

#### Characteristics of Secondary Memory

- It is a slow memory but reusable.
- It is a reliable and non-volatile memory.
- It is cheaper than primary memory.
- The storage capacity of secondary memory is large.
- A computer system can run without secondary memory.
- In secondary memory, data is stored permanently even when the power is off.

## 3. Cache Memory

It is a type of high-speed semiconductor memory that can help the CPU run faster. Between the CPU and the main memory, it serves as a buffer. It is used to store the data and programs that the CPU uses the most frequently.

**Advantages of cache memory:**

- It is faster than the main memory.
- When compared to the main memory, it takes less time to access it.
- It keeps the programs that can be run in a short amount of time.
- It stores data in temporary use.

**Disadvantages of cache memory:**

- Because of the semiconductors used, it is very expensive.
- The size of the cache (amount of data it can store) is usually small.
